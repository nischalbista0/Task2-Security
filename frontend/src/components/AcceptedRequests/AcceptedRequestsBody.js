import axios from "axios";
import React, { useEffect, useState } from "react";
import AcceptedRequest from "./AcceptedRequest";

const AcceptedRequestsBody = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  const fetchAcceptedRequests = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/exchange/exchange-requests/accepted",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAcceptedRequests(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAcceptedRequests();
  }, []);

  return (
    <div className="mt-5 mb-16 flex flex-col items-stretch gap-4 md-2:mb-5">
      {acceptedRequests.length === 0 && (
        <div className="text-center">
          <p className="font-medium text-center md-2:text-lg">No Accepted Requests yet 🙁</p>
        </div>
      )}
      {acceptedRequests.map((request) => (
        <AcceptedRequest
          key={request._id}
          request={request}
          onUpdate={fetchAcceptedRequests}
        />
      ))}
    </div>
  );
};

export default AcceptedRequestsBody;
