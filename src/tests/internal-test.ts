import { Client } from '../datatypes/client-types';
import { Student } from '../datatypes/student-types';
import { Wordlist } from '../datatypes/wordlist-types';
import { addClient,  deleteClient, getClientByToken } from "../logic/client";
import { addStudent, deleteStudent, getStudentByToken, renameStudent } from '../logic/student';
import { addWordToWordlist, createWordlist, deleteWordlist, removeWordFromWordlist, renameWordlist, transferWordlist, getWordlist } from '../logic/wordlist';

function generateWordlistID(max_size : number) //24 in norm id
{
  var str = "";
    for (var i = 0; i < max_size; i++)
    {
      var digit = Math.floor(Math.random() * 16);
      switch (digit)
      {
        case 10:
          str += "a";
          break;
        case 11:
          str += "b";
          break;
        case 12:
          str += "c";
          break;
        case 13:
          str += "d";
          break;
        case 14:
          str += "e";
          break;
        case 15:
          str += "f";
          break;

        default:
          str += 48 + Math.floor(Math.random() * 16);
      }
    }
    return str;
}

export async function internalTest() {
    try {
        console.log('Начато тестирование клиентского функционала');
        await testClientFunctions(100);
    } catch (error) {
        console.error('Ошибка при тестировании функционала клиента\n'+error);
    }
    try {
        console.log('Начато тестирование функционала вордлиста');
        await testWordlistFunctions(100);
    } catch (error) {
        console.error('Ошибка при тестировании функционала вордлиста\n'+error);
    }
    try {
        console.log('Начато тестирование функционала студента');
        await testStudentFunctions(100);
    } catch (error) {
        console.error('Ошибка при тестировании функционала студента\n'+error);
    }
}

async function testClientFunctions  (count : number) {
    let tokens: Array<string> = new Array()
    try
    {
    for (let index = 0; index < count; index++) {
        tokens.push((await addClient(`ШЛЁПА-Client ${count}#${index}`,'Мятные Пряники')).token)
    }
    console.log('   1.Создание клиентов прошло успешно');

    let clients: Array<Client> = new Array()
    for (let index = 0; index < count; index++) {
        clients.push(await getClientByToken(tokens[index]))
    }
    console.log('   2.Получение клиентов прошло успешно');
    for (let index = 0; index < count; index++) {
        await deleteClient(clients[index])
    }
    console.log('   3.Удаление клиентов прошло успешно');
  }
  catch (error) {
      console.error('Ошибка при тестировании функционала клиента\n'+error);
  }
}

async function testWordlistFunctions(count : number) {
    let clients: Array<Client> = new Array()
    for (let index = 0; index < count; index++) {
        clients.push(await addClient(`ШЛЁПА-Wordlist ${count}#${index}`,'Мятные Пряники'))
    }

    try {
        let lists: Array<Wordlist> = new Array()
    for (let index = 0; index < count; index++) {
        lists.push(await createWordlist(clients[index],`${Math.random()*100000}`))
    }
    console.log('   1.Создание вордлиста прошло успешно');

    for (let index = 0; index < count; index++) {
        await addWordToWordlist(lists[index],['БАЗА','Приказ Израиля','Fucking Slave','FLEXxX'])
        await addWordToWordlist(lists[index],'Я кринжовый молоток, Мне очень грустно. Помогите пожалуйста')
    }
    console.log('   2.Добавление слова в вордлист прошло успешно');

    for (let index = 0; index < count; index++) {
        await renameWordlist(lists[index],'КРИНЖ')
    }
    console.log('   3.Лист Переименован успешно');

    for (let index = 0; index < count; index++) {
        await removeWordFromWordlist(lists[index],['БАЗА','Приказ Израиля','Fucking Slave','FLEXxX'])
        await removeWordFromWordlist(lists[index],'А этого слова нет!')
    }
    console.log('   4.Удаление слова из вордлиста прошло успешно');

    for (let index = 0; index < count; index++) {
        await transferWordlist(lists[index],clients[count-index-1]._id)
    }
    console.log('   5.Лист передан успешно');

    for (let index = 0; index < count; index++) {
        await deleteWordlist(lists[index])
    }
    console.log('   6.Удаление листа прошло успешно');

    for (let index = 0; index < count; index++) {
        await getWordlist(generateWordlistID(24));
    }
    console.log('   7.Получение листа прошло успешно');

    } catch (error) {
        console.error('Ошибка при тестировании функционала вордлиста\n'+error);
    }

    for (let index = 0; index < count; index++) {
        await deleteClient(clients[index])
    }
}

async function testStudentFunctions (count : number) {
    let client : Client = await addClient(`Master-ШЛЁПА`,'BIG SHLEPA')
    try
    {
    let tokens: Array<string> = new Array()
    for (let index = 0; index < count; index++) {
        tokens.push((await addStudent(client)).token)
    }
    console.log('   1.Создание студентов прошло успешно');
    let students: Array<Student> = new Array()
    for (let index = 0; index < count; index++) {
        students.push(await getStudentByToken(tokens[index]))
    }
    console.log('   2.Получение студентов прошло успешно');

    for (let index = 0; index < count; index++) {
        await renameStudent(students[index],`Slave-ШЛЁПА ${count}#${index}`)
    }
    console.log('   3.Периименование студентов прошло успешно');

    for (let index = 0; index < count; index++) {
        await deleteStudent(students[index])
    }
    console.log('   4.Удаление студентов прошло успешно');


    await deleteClient(client);
  }
    catch (error) {
        console.error('Ошибка при тестировании функционала студентов\n'+error);
    }
}
