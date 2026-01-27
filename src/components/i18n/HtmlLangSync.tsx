"use client";

import * as React from "react";
import { useLocale } from "next-intl";

export function HtmlLangSync() {
  const locale = useLocale();

  React.useLayoutEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

