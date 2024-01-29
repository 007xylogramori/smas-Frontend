interface QrCodeProps {
  hash: string; 
}
import QRCode from "react-qr-code";
const QrCode: React.FC<QrCodeProps> = ({hash}) => {
    console.log(hash);
  return (
    <div style={{  background: 'white', padding: '16px' ,  margin: "0 auto",  width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={hash}
    viewBox={`0 0 256 256`}
    />
</div>
  )
}

export default QrCode
