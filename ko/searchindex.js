Object.assign(window.search, {"doc_urls":["index.html#move-프로그래밍-언어","introduction/foreword.html#서문","introduction/getting-started.html#시작하기","introduction/getting-started.html#move-ide-설치-방법","introduction/getting-started.html#설치-환경","introduction/getting-started.html#move로-만든-최초의-어플리케이션","introduction/getting-started.html#모듈-생성","introduction/getting-started.html#스크립트-작성"],"index":{"documentStore":{"docInfo":{"0":{"body":4,"breadcrumbs":1,"title":1},"1":{"body":6,"breadcrumbs":0,"title":0},"2":{"body":13,"breadcrumbs":0,"title":0},"3":{"body":6,"breadcrumbs":2,"title":2},"4":{"body":35,"breadcrumbs":0,"title":0},"5":{"body":4,"breadcrumbs":1,"title":1},"6":{"body":14,"breadcrumbs":0,"title":0},"7":{"body":27,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"Move는 Diem 측에서 블록체인 분야를 위해 개발한 언어로, 안전성과 안정성을 갖추고 있습니다. Diem 개발자 웹사이트 에서 언어백서를 열람하실 수 있습니다. 또한 이 언어가 왜 블록체인 용도에 최적화되어 있는지에 대해서도 파악하실 수 있습니다. 본 백서는 Move 언어 관련 정보를 집대성함으로써 모든 정보를 한 권으로 압축하는 과정을 통해 탄생하였습니다.","breadcrumbs":"Move 프로그래밍 언어","id":"0","title":"Move 프로그래밍 언어"},"1":{"body":"제가 이 책을 발간하였을 시점에는 Move에 대한 어떠한 문서(또는 참고문헌)도 존재하지 않았고, 따라서 크립토 세계의 숨겨진 보석인 Move 언어를 모두에게 알리고 싶은 뜻에서 작업을 진행하게 되었습니다. 현재는 언어개발자들이 편찬한 Move 관련 문서 가 있습니다만 여전히 초심자들에게는 이 책에 담긴 흐름이 더욱 직관적이며 친근할 것으로 생각됩니다. 저 또한 한때는 초심자였는데, Move는 꽤나 까다롭고 흥미로운 언어이며 일부 개념들은 충격적으로 느껴질 수 있습니다. 제가 이 언어를 이토록 사랑하는 이유를 여러분께서 알게 되실 것을 기대합니다! - Damir Shamanaev","breadcrumbs":"서문","id":"1","title":"서문"},"2":{"body":"경고: 이 페이지에 있는 컨텐츠는 더 이상 유효하지 않으며 재작업이 필요합니다. Move IDE의 최신 버전이 곧 배포될 것입니다. 현재로서는 move-cli 를 사용하실 것을 권고드립니다. 컴파일된 모든 언어들이 그렇듯이, Move 어플리케이션을 컴파일, 구동 및 디버그 하려면 적절한 도구 모음이 필요합니다. 이 언어는 블록체인 용도로 개발되어 해당 분야에서만 사용되기에, 체인 외부 환경에서 스크립트를 구동하는 것은 간단한 일이 아닙니다. 그러한 경우 각 모듈마다 별도의 환경과 계정 처리 및 컴파일 배포 시스템을 배정해야 하기 때문입니다. Move 모듈 개발의 간소화가 이루어질 수 있도록 Visual Studio Code에 대응하는 Move IDE 확장프로그램을 개발했습니다. 이 확장 프로그램은 환경 요구사항에 대응하는 것을 도울 것이며, 빌드/구동 환경을 처리해 줌으로써 CLI와 씨름하는 일 없이 Move 언어 학습에만 집중할 수 있도록 돕기 때문에, 사용하시는 것을 강력하게 추천드립니다.","breadcrumbs":"시작하기","id":"2","title":"시작하기"},"3":{"body":"설치를 진행하려면 다음의 항목이 필요합니다. VSCode (버전 1.43.0 이상) – 이 곳 에서 받으실 수 있습니다. 이미 있으시다면 다음 단계로 진행해 주십시오. Move IDE – VSCode를 설치한 뒤 이 링크 로 들어가 최신 IDE 버전을 설치하십시오","breadcrumbs":"Move IDE 설치 방법","id":"3","title":"Move IDE 설치 방법"},"4":{"body":"Move IDE는 디렉토리 구조를 정리할 수 있는 방법을 제공합니다. 프로젝트에 새 디렉토리를 생성하여 VSCode에서 실행하십시오. 이후 아래의 디렉토리 구조를 설치하십시오. modules/ - directory for our modules\nscripts/ - directory for transaction scripts\nout/ - this directory will hold compiled sources 또한 .mvconfig.json 이라는 이름의 파일을 생성하여 작업 환경에 libra 를 구성합니다. 아래 내용은 하나의 예시입니다. { \"network\": \"libra\", \"sender\": \"0x1\"\n} 또는 difnance를 네트워크로 사용할 수도 있습니다. { \"network\": \"dfinance\", \"sender\": \"0x1\"\n} dfinance는 bech32 'wallet1...' 주소를 사용하며, libra는 16-byte '0x...' 주소를 사용합니다. 로컬 구동 및 실험의 경우 간단하고 짧은 0x1 주소만으로 충분할 것입니다. 그러나 testnet이나 제품환경에서 작업하는 경우 선택한 네트워크에 대응하는 정확한 주소를 사용해야 합니다.","breadcrumbs":"설치 환경","id":"4","title":"설치 환경"},"5":{"body":"Move IDE를 사용하면 시험 환경에서 스크립트를 구동할 수 있습니다. gimme_five() 함수를 구현한 뒤 VSCode 내부에서 구동하여 작동법을 함께 알아봅시다.","breadcrumbs":"Move로 만든 최초의 어플리케이션","id":"5","title":"Move로 만든 최초의 어플리케이션"},"6":{"body":"프로젝트의 modules/ 디렉토리 내부에 hello_world.move 라는 이름의 새로운 파일을 생성합시다. // modules/hello_world.move\naddress 0x1 {\nmodule HelloWorld { public fun gimme_five(): u8 { 5 }\n}\n} 0x1 이 아닌 본인만의 주소를 사용하기로 결정했다면 반드시 이 파일과 다음 파일에 등장하는 0x1 값을 해당 주소 값으로 수정해 주십시오.","breadcrumbs":"모듈 생성","id":"6","title":"모듈 생성"},"7":{"body":"다음으로 scripts/ 디렉토리 안에 run_hello.move라고 하는 스크립트를 생성합니다. // scripts/run_hello.move\nscript { use 0x1::HelloWorld; use 0x1::Debug; fun main() { let five = HelloWorld::gimme_five(); Debug::print<u8>(&five); }\n} 이후 스크립트를 열어놓은 상태로 다음의 단계들을 진행하십시오. (맥의 경우) ⌘+Shift+P 또는 (리눅스/윈도우의 경우) Ctrl+Shift+P 를 눌러 VSCode의 명령 팔레트를 전환합니다. >Move: Run Script 를 입력한 뒤 적절한 옵션이 나오면 엔터 키를 누르거나 클릭합니다. 짜잔! 실행 결과를 보면 디버그에 5가 출력된 로그 메시지를 확인할 수 있습니다. 이 창이 등장하지 않는다면 이 부분을 다시 진행해 주십시오. 디렉토리 구조는 아래의 형태와 같아야 합니다. modules/ hello_world.move\nscripts/ run_hello.move\nout/\n.mvconfig.json 모듈 디렉토리에 둘 수 있는 모듈의 개수에는 제한이 없습니다. 해당 디렉토리에 있는 모든 모듈은 .mvconfig.json에서 명시해 둔 주소를 사용해서 스크립트에서 접근할 수 있습니다.","breadcrumbs":"스크립트 작성","id":"7","title":"스크립트 작성"}},"length":8,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":0,"docs":{},"x":{"1":{":":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":2,"docs":{"4":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}},"df":1,"docs":{"4":{"tf":1.0}}}},"1":{".":{"4":{"3":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"3":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"+":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"d":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{":":{":":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"u":{"8":{">":{"(":{"&":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"f":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{":":{":":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"d":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":7,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":2.0},"2":{"tf":2.449489742783178},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"7":{"tf":1.0}}}}},"v":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":2.0}},"s":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"0":{"df":0,"docs":{},"x":{"1":{":":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":2,"docs":{"4":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}},"df":1,"docs":{"4":{"tf":1.0}}}},"1":{".":{"4":{"3":{".":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"6":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"5":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"3":{"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"+":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"d":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{":":{":":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"u":{"8":{">":{"(":{"&":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"f":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{":":{":":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"i":{"d":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":2.0},"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"7":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":7,"docs":{"0":{"tf":2.0},"1":{"tf":2.0},"2":{"tf":2.449489742783178},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"7":{"tf":1.0}}}}},"v":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":2.0}},"s":{"/":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"_":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{".":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"+":{"df":0,"docs":{},"p":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"8":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"s":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"w":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"title":{"root":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"5":{"tf":1.0}}}}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});