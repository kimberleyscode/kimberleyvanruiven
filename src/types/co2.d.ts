/* De CO₂-calculator is een port van een vanilla-JS-tool: de rekenfuncties worden op
   window gezet omdat de knoppen in de opmaak ze rechtstreeks aanroepen. Zonder deze
   declaratie zou elke aanroep een `any`-cast nodig hebben. */
declare global {
  interface Window {
    step: (id: string, delta: number) => void;
    setTokens: (id: string, waarde: number, el: HTMLElement) => void;
    setPeriod: (periode: string, el: HTMLElement) => void;
    calculate: () => void;
    toggleTheme: () => void;
  }
}

export {};
