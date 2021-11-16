import React, { useCallback, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { FiCheck, FiCopy } from "react-icons/fi";

import { Container, Background, Main, SenhaField } from "./appStyles";

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const handleNewPassword = useCallback(() => {
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!#$%";
    const passwordLength = 12;
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }

    setCopied(false);
    setPassword(newPassword);
  }, []);

  const handleCopyPassword = useCallback(() => {
    setCopied(true);
  }, []);

  return (
    <Container>
      <Main ref={mainRef}>
        <h1>Gere uma senha segura</h1>

        {password && (
          <SenhaField isCopied={!!copied}>
            <h2>{password}</h2>
            <CopyToClipboard text={password}>
              <button onClick={handleCopyPassword}>
                {copied ? <FiCheck size={24} /> : <FiCopy size={24} />}
              </button>
            </CopyToClipboard>
          </SenhaField>
        )}
        <button onClick={handleNewPassword}>Gerar senha</button>
      </Main>
      <Background />
    </Container>
  );
};

export default App;
