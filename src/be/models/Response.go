package md

type Response struct {
	Status string      `json:"status"`
	Errors interface{} `json:"errors"`
	Data   interface{} `json:"data"`
}

type Message struct {
	Message string `json:"message"`
}

type ErrorResponse struct {
	Message string `json:"message"`
}

type EmptyObj struct{}

func BuildResponse(data interface{}) Response {
	res := Response{
		Status: "SUCCESS",
		Errors: nil,
		Data:   data,
	}
	return res
}

func BuildMessageResponse(message string) Response {
	res := Response{
		Status: "SUCCESS",
		Errors: nil,
		Data:   Message{Message: message},
	}
	return res
}

func BuildErrorResponse(err string, data interface{}) Response {
	errMgs := ErrorResponse{Message: err}
	res := Response{
		Status: "FAILURE",
		Errors: errMgs,
		Data:   data,
	}
	return res
}
