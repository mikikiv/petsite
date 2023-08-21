import React, { useState } from "react"
import QRCode from "qrcode.react"

interface WifiQRCodeProps {
  ssid: string
  password: string
  size?: string
}

const WifiQRCode: React.FC<WifiQRCodeProps> = ({ ssid, password, size }) => {
  const [showQR, setShowQR] = useState(true)

  const wifiConfigString = `WIFI:T:WPA;S:${ssid};P:${password};;`

  !size && (size = "240px")

  return (
    <p
      style={{
        padding: "10px",
        backgroundColor: "white",
        width: "min-content",
      }}
    >
      <QRCode value={wifiConfigString} style={{ height: size, width: size }} />
      <WifiAsText ssid={ssid} password={password} />
    </p>
  )
}

export default WifiQRCode

interface WifiAsTextProps {
  ssid: string
  password: string
}

const WifiAsText = ({ ssid, password }) => {
  return (
    <div style={{ color: "black" }}>
      Wifi: <code>{ssid}</code>
      <br />
      Password: <code>{password}</code>
    </div>
  )
}
