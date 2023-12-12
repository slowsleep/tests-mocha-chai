const { expect } = require('chai');
const { getUser } = require('../src/back-script');

describe('Получение данных о пользователе с api github', function() {
    it('Запрос для получения данных от сервера проходит без ошибки и возвращает 200 код', async () => {
        let res = await getUser();
        expect(res.status).that.is.equal(200);
    });
    it('Запрос возвращает данные пользователя', async () => {
        let res = await getUser();
        expect(res.data).that.is.not.empty;
    });
});

