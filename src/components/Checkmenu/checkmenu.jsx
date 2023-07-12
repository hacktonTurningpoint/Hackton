import React, { useEffect } from "react";
import axios from "axios";

const YourComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "http://openapi.safekorea.go.kr/openapi/service/behaviorconduct/disaster/civildefence/total/list";
        const queryParams =
          "?" +
          encodeURIComponent("serviceKey") +
          "=" +
          "QULcQFE%2BXnbETqC4FOTYb676LqKAIX7Jlok%2BnC8kspWEhc1ON4OzcZr%2FTFiLcLuASUOzq6Rpafhl5QrWc4tngw%3D%3D";
        const response = await axios.get(url + queryParams);
        console.log(response.data); // 응답 데이터 출력
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>Your Component</div>;
};

export default YourComponent;
