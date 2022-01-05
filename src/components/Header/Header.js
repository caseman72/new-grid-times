import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <HeaderActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </HeaderActionGroup>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SubscribeActionGroup>
          <Button>Subscribe</Button>
          <Link href="#login">Already a subscriber?</Link>
        </SubscribeActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 100%;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  svg {
    display: block;
  }
`;

const HeaderActionGroup = styled.div`
  display: none;
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
  }
`;

const SubscribeActionGroup = styled.div`
  display: none;
  svg {
    display: block;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const Link = styled.a`
  display: block;
  background: revert;
  font-style: italic;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
