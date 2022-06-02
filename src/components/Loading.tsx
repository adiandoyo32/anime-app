import styled from "@emotion/styled";

const LoadingWrapper = styled.div`
    height: calc(100vh - 4rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loading = () => {
    return (
        <LoadingWrapper>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </LoadingWrapper>
    );
};

export default Loading;
