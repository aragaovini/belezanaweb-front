import styled from 'styled-components'

export const ButtonBox = styled.button(
  ({ theme }) => `
    font-size: ${theme.fonts.button};
    letter-spacing: 0.5px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
    border: none;
    border-radius: ${theme.borderRadius};
    font-weight: 700;
    text-transform: uppercase;
    padding: 18px 12px;
    width: 100%;
    box-shadow: inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25), ${theme.shadows.paper};
    transition: .2s;
    line-height: 24px;
    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
      background-color: ${theme.colors.darkAccent};
      box-shadow: none;
      cursor: pointer;
    }
  `
)
