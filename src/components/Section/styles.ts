import styled from 'styled-components';

export const Container = styled.div`
    --padding-top: 100px;
    --padding-botom: 120px;
    --heading-font-size: 33px;
    --content-width: 100%;

    &.blue {
        --bg-color: var(--color-primary);
        --text-color: var(--color-tertiary);
        --logo-color: var(--color-secondary);
    }

    &.beige {
        --bg-color: var(--color-secondary);
        --text-colot: var(--color-quaternary);
        --logo-color: var(--color-primary);
    }

    &.black {
        --bg-color: var(--color-quaternary);
        --text-colot: var(--color-tertiary);
        --logo-color: var(--color-blue);
    }

    &.white {
        --bg-color: var(--color-tertiary);
        --text-color: var(--color-quaternary);
        --logo-color: var(--color-blue);
    }

    &.first-child {
        --padding-top: 130px;
        --heading-font-size: 51px;

        @media (min-width: 1024px) {
            --content-width: 50%;
            --heading-font-size: 71px;
        }   
    }

    background: var(--bg-color);
`;

export const Content = styled.div`
    z-index: 2;
    position: relative;
    max-width: 1440px;
    margin: 0 auto;

    > h2 {
        font-size: var(--heading-font-size);
        color: var(--logo-color);
        max-width: var(--content-width);
    }

    > p {
        margin-top: 20px;
        font-size: 16px;
        color: var(--text-color);
        max-width: var(--content-width);
    }

    padding: var(--padding-top) 32px var(--padding-bottom);
`;
