import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { isAfter, addHours } from 'date-fns';

import IUserRepository from '../repositories/IUsersRepository';
import IUsersTokenRepository from '../repositories/IUsersTokenRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

// import User from '../infra/typeorm/entities/User';

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordService {
    // eslint-disable-next-line prettier/prettier
    constructor(
        @inject('UsersRepository')
        private userRepository: IUserRepository,

        @inject('UserTokenRepository')
        private userTokenRepository: IUsersTokenRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) { }

    public async execute({ token, password }: IRequest): Promise<void> {
        const userToken = await this.userTokenRepository.findByToken(token);

        if (!userToken) {
            throw new AppError('userToken doest not exists');
        }

        const user = await this.userRepository.findById(userToken.user_id);

        if (!user) {
            throw new AppError('user doest not exists');
        }

        const tokenCreatedAt = userToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 2);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token expired');
        }

        // if (differenceInHours(Date.now(), tokenCreatedAt) > 2) {
        //     throw new AppError('Token expired');
        // }

        user.password = await this.hashProvider.generateHash(password);

        await this.userRepository.save(user);
    }
}

export default ResetPasswordService;
