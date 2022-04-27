// 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
// 이행(fulfilled): 연산이 성공적으로 완료됨.
// 거부(rejected): 연산이 실패함.

function fetchMovies(title) {
  // 대기(pending): 이행하지도, 거부하지도 않은 초기 상태.
  const OMDB_API_KEY = "7035c60c11";

  return new Promise(async (resolve, reject) => {
    try {
      //async는  프로미스 생성자 안에 콜백함수로 들어있기때문에 콜백함수 앞에 async 키워드를 붙여준다
      const res = await axios.get(
        `https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`
      );
      // console.log(res);
      resolve(res); // 이행(fulfilled): 연산이 성공적으로 완료됨.
      //resovle라는 매개변수를 호출하여 인수로 응답받은 데이터를 반환해준다.
    } catch (error) {
      // 거부(rejected): 연산이 실패함.
      console.log(error.message);
      reject("에러가 발생했습니다", error.message);
      //message 에러 객체안에 메시지를 속성을 사용할 수 있음.
      //api키가 잘못된 경우 401 error
    }
  });
}

async function test() {
  try {
    const res = await fetchMovies("frozen");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

//왜 굳이 함수로 따로 뺴서 사용하는가?
//01. axios get으로만 사용하여 직관적인 코드가 어렵다. fetchMovies 라고 하면 영화의 정보를 가져오는구나 알수있다.
//02. OMDB_API_KEY 키를 따로 관리가 가능하고,  따로 노출하지 않아도 되서
//03. fetchMovies 함수를 통해 재활용이 가능하다.

test();
function hello() {
  fetchMovies("jobs")
    .then(res => console.log(res))
    .catch(error => {
      console.log(error);
    });
}
hello();
