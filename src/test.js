describe('Получение данных о пользователе с api github', () => {

    it('div-элемент не должен быть пустым', done => {
        setTimeout(function() {
            try {
                let content = document.querySelector("#content").textContent;
                expect(content).that.is.not.empty;
                done();
            } catch(e) {
                done(e);
            }
        }, 1000 );
    });

    it('Запрос для получения данных от сервера проходит без ошибки и возвращает 200 код', (done) => {
        setTimeout(function() {
            try {
                let content = document.querySelector("#content").textContent;
                let userData = JSON.parse(content);
                expect(userData.status).that.is.equal(200);
                done();
            } catch(e) {
                done(e);
            }
        }, 1000 );
    });
    it('Запрос возвращает данные пользователя', (done) => {
        setTimeout(function() {
            try {
                let content = document.querySelector("#content").textContent;
                let userData = JSON.parse(content);
                expect(userData.data).that.is.not.empty;
                done();
            } catch(e) {
                done(e);
            }
        }, 1000 );
    });
    it('В данных пользователя присутвует количество репозиториев', (done) => {
        setTimeout(function() {
            try {
                let content = document.querySelector("#content").textContent;
                let userData = JSON.parse(content);
                expect(userData.data.public_repos).that.is.equal(22);
                done();
            } catch(e) {
                done(e);
            }
        }, 1000 );
    });
});
