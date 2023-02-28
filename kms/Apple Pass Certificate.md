To sign the apple pass, I need the .p12 file downloaded from Apple Developer Portal

1. Extract .pem file out of the .p12 with this command 
	`openssl pkcs12 -in TheStarAppPass.p12 -clcerts -out TheStarAppPass.pem -passin pass:NoShare2023@1`
2. Use the contents of this .pem file to sign the pass


Another way to do this is by using the .p12 file in base64 format. This is how I did for the Go library github.com/alvinbaena/passkit which was used for Ditgital Cards at Star

The statement which used the file in Go is

`p12, err := b64.StdEncoding.DecodeString(secretParameters.IosCertificate)`

To base64 the .p12 use this command

`base64 -i TheStarAppPass.p12`

## Tags

#Tech
#Apple
#Programming
#Apple-Pass

