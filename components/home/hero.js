import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
  
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 최인영입니다!
          <br className="hidden lg:inline-block"/>
          오늘도 빡코딩?
        </h1>
        <p className="mb-8 leading-relaxed">
          없으면 열락의 영락과 지혜는 끓는다. 수 대고, 하였으며, 있는가? 수 없으면 얼마나 아름다우냐? 어디 가슴에 보배를 거선의 관현악이며, 피에 미묘한 칼이다. 놀이 역사를 이상의 인간의 몸이 우는 사는가 갑 내려온 교향악이다. 못하다 붙잡아 튼튼하며, 무엇을 되는 철환하였는가? 예수는 그들의 위하여 풀이 트고, 칼이다. 같이, 있는 보이는 이것이다. 때에, 그것은 굳세게 남는 있는 아름답고 것이다. 열락의 곳이 대고, 얼음과 품고 때에, 우리는 있다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
          
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation/>
      </div>
    </>
  );
}