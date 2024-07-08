"use client";
import React, { FC, PropsWithChildren } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Pages } from "./types/enums";
import { usePages } from "./hooks/use-pages";
import { Header } from "./layouts/Header";
import { Menu } from "./layouts/Menu";
import { Store } from "./layouts/Store";
import { Collection } from "./layouts/Collection";
import clsx from "clsx";

export const CardCollection: FC<{ basePath: string }> = ({ basePath }) => {
  const [currentPage, changePage] = usePages();

  return (
    <Provider store={store}>
      <Wrapper basePath={basePath}>
        <Header title={currentPage} basePath={basePath} />
        <TransitionGroup component={Main}>
          <CSSTransition key={currentPage} timeout={300} classNames="page-transition">
            <>
              {currentPage === Pages.Menu && <Menu changePage={changePage} />}
              {currentPage === Pages.Store && <Store changePage={changePage} />}
              {currentPage === Pages.Collection && <Collection changePage={changePage} />}
            </>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </Provider>
  );
};

export const Wrapper: FC<PropsWithChildren<{ basePath: string }>> = ({ children, basePath }) => {
  return (
    <div
      className={clsx(
        "h-screen font-ubuntu",
        "flex flex-col",
        "relative",
        "before:absolute before:inset-0 before:bg-amber-300/40",
        "bg-center"
      )}
      style={{ backgroundImage: `url(${basePath}/images/card-collection/bg.png)` }}
    >
      {children}
    </div>
  );
};

export const Main: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className={clsx("relative overflow-hidden z-10", "h-full w-full max-w-[1300px] mx-auto")}>{children}</main>
  );
};
