 # Recuperação de Senha

**RF REQUISITOS FUNCIONAIS**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF REQUISITOS NÃO FUNCIONAIS**

- Utilizar Mailtrap para testar envios em ambientes de desenvolvimentos;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

**RN REGRAS DE NEGÓCIO**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confimar a nova senha ao resetar sua senha;



 # Atualização do perfil

**RF REQUISITOS FUNCIONAIS**

- o usuário deve poder atualizar seu nome, email e senha

**RN REGRAS DE NEGÓCIO**

- O usuário nao pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- para atualizar sua senha, o usuário precisa confimar a nova senha;


 # Painel do prestador


**RF REQUISITOS FUNCIONAIS**

- O usuário deve oder listar seus agendamento de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF REQUISITOS NÃO FUNCIONAIS**

- Os agendamentos do prestador no dia devem ser armezadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizado Socket.io;

**RN REGRAS DE NEGÓCIO**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;



 # Agendamento de serviços

**RF REQUISITOS FUNCIONAIS**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horários disponivel de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF REQUISITOS NÃO FUNCIONAIS**

- A listagem de prestadoes deve ser armezadas em cache;

**RN REGRAS DE NEGÓCIO**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (primeiro 8h, ultimo 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
