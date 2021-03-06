import { styled } from "~/src/theme";
import { includeBreakpoint } from "~/src/theme/mixins";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 704px;
  height: 100%;
  padding: ${({ theme }) => theme.rem(16)};

  ${includeBreakpoint.mobile`
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.colors.beige};
  `}
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: ${({ theme }) => theme.rem(26)};
  letter-spacing: 0;
`;

export const StyledTypesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  ${includeBreakpoint.laptop`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 16px;
  `}
`;

export const StyledTypeCard = styled.div<{ active?: boolean }>`
  border: 2px solid ${({ theme }) => theme.colors.beige};
  border-radius: 8px;
  min-width: 156px;
  height: 88px;
  padding: 8px 12px;
  cursor: pointer;
  transition: border-color 0.2s ease-in;
  border-color: ${({ active, theme }) => active && theme.colors.green};

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledTypeName = styled.p`
  margin-bottom: 5px;
`;

export const StyledTypeDescr = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 12px;
  letter-spacing: 0;
`;
