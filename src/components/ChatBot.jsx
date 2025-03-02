import { useState } from "react"

// import {
//   Webchat,
//   WebchatProvider,
//   Fab,
//   getClient,
//   // Configuration,
// } from "../../node_modules/@botpress/webchat/dist/index"

const clientId = "1615632d-c50c-46f4-99c3-b58578c643b4"

const configuration = {
  color: "#000",
}

const ChatBot = () => {
  const client = getClient({
    clientId,
  })

  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? "block" : "none",
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  )
}

export default ChatBot
