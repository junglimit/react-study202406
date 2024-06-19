import React from "react";

// 로그인 관련 상태 데이터들을 중앙집중 관리하는 파일
// 컨텍스트 : 데이터 중앙 저장소, 생성시 관리할 기본 데이터를 명시
//          데이터 값은 타입 기본값을 명시 -> 에디터 자동완성뜸
const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => {}
    }
);

export default AuthContext;