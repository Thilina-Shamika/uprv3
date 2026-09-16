/** Content model shared by the legal pages (Privacy Policy, Terms & Conditions). */
export type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { dl: [string, string][] };

export type Section = { id: string; n: string; title: string; blocks: Block[] };
