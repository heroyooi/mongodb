# MongoDB

몽고DB를 학습하기 위한 저장소

## 몽고디비+컴퍼스 설치하기
- [몽고디비 다운로드](https://www.mongodb.com/try/download/enterprise)
- msi 파일을 다운받으면 설치

- 다음 명령어로 몽고DB 실행
```command
mongod
```
  - 몽고디비를 사용할 일이 있을 때마다 mongod 명령어로 먼저 서버를 실행해야 된다.

- 다음 명령어로 몽고디비 프롬프트에 접속
```command
mongo
```

## 몽고디비 프롬프트에서 명령어로 실습
```command
> use admin
> db.createUser({  user: 'heroyooi', pwd: 'qwer1234', roles: ['root'] })
```
- 관리자 계정 추가

```command
mongo admin -u heroyooi -p qwer1234
```
- 접속 시도

## 데이터베이스 및 컬렉션 생성하기
```command
> use nodejs
> show dbs
> db
```
- nodejs DB 생성
- 사용하는 DB 확인
  - 위에서 생성한 nodejs가 없는 이유는 데이터가 없어서
  - 데이터를 최소 한개 이상 넣어야 목록에 표시됨
- 현재 사용중인 db


```command
> db.createCollection('users')
> db.createCollection('comments')
> show collections
```
- users 컬렉션 생성
- comments 컬렉션 생성
- 생성된 컬렉션 목록 확인

## CRUD
- Create(생성)
```command
> db.users.save({ name: 'hero', age: 37, married: true, comment: '안녕하세요. 간단히 몽고 디비 사용 방법에 대해 알아봅시다.', createdAt: new Date() });
> db.users.save({ name: 'nero', age: 32, married: false, comment: '안녕하세요. hero 친구 nero 입니다.', createdAt: new Date() });

> db.users.find({ name: 'hero' }, { _id: 1 })
```
  - 다음과 같이 해당 id 값을 알려준다. { "_id" : ObjectId("6023657bc80bb9bbfe17ff23") }

```command
> db.comments.save({ commenter: ObjectId('6023657bc80bb9bbfe17ff23'), comment: '안녕하세요. hero 댓글입니다.', createdAt: new Date() });
```

- Read(조회)
```command
> db.users.find({});
```
  - 생성한 다큐먼트들 조회

```command
> db.users.find({}, { _id: 0, name: 1, married: 1 });
```
  - 특정 필드만 조회, name과 married 필드만 조회

```command
> db.users.find({ age: { $gt: 30 }, married: true }, { _id: 0, name: 1, age: 1 });
```
  - 특정 조건으로 특정 필드만 조회, age가 30 초과, married가 true인 다큐먼트의 이름과 나이 조회

  - 몽고디비는 자바스크립트 객체를 사용해서 명령어 쿼리를 생성해야 하므로 $gt 같은 특수한 연산자가 사용된다.
  - 자주 쓰이는 연산자로는 $gt(초과), $gte(이상), $lt(미만), $lte(이하), $ne(같지 않음), $or(또는), $in(배열 요소 중 하나) 등이 있다.

```command
> db.users.find({ $or: [{ age: { $gt: 30 } }, { married: false }] }, { _id: 0, name: 1, age: 1 });
```
  - age가 30 초과이거나 married가 false인 다큐먼트를 조회

```command
> db.users.find({}, { _id: 0, name: 1, age: 1 }).sort({ age: -1 });
```
  - 나이가 많은 순서대로 정렬 sort
  - 정렬, -1은 내림차순, 1은 오름차순

```command
> db.users.find({}, { _id: 0, name: 1, age: 1 }).sort({ age: -1 }).limit(1);
```
  - 조회할 다큐먼트 개수 설정 limit

- Update(수정)
```command
> db.users.update({ name: 'hero' }, { $set: { comment: '안녕하세요. 이 필드를 바꿔보겠습니다.!' } });
```

- Delete(삭제)
```command
> db.users.remove({ name: 'nero' })
```

## 몽구스 사용하기
- MySQL에 시퀄라이즈가 있다면 몽고디비에는 몽구스가 있다.
```command

```