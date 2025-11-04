import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoxes, fetchAgentBoxes } from "../components/boxSlice";

const Server = () => {
  const dispatch = useDispatch();
  const { items, agents, loading, error } = useSelector(
    (state) => state.storebox
  );

  useEffect(() => {
    dispatch(fetchBoxes());
    dispatch(fetchAgentBoxes());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container mb-40">
      {/* Header */}
      <div className="w-full mt-120 mb-40">
        <h2 className="text-5xl">Explore our MCP Server</h2>
        <p className="text-[18px] mt-10">
          Find your suitable MCP Server in one place, from setup to tools
        </p>
      </div>

      {/* Product Boxes */}
      <div className="flex gap-4 server_cont flex-wrap md:flex-nowrap">
        {items.map((box) => (
          <div
            key={box.id}
            className="w-12/12 md:w-3/12 server_box p-4 border rounded-lg shadow"
          >
            <h3 className="text-2xl font-bold">{box.title}</h3>
            <div className="server_inner_box relative mt-4">
              {box.tags.map((tag) => (
                <p key={tag.id} className="service_tag mb-2">
                  <b>{tag.label}</b>  
                  {tag.description}
                </p>
              ))}
            </div>
            <a
              href={box.link}
              className="buy_now mt-20 inline-block text-blue-600 font-semibold"
            >
              Checkout
            </a>
          </div>
        ))}
      </div>

      {/* Agent Section */}
      <div className="mt-20 flex flex-wrap md:flex-nowrap">
        {agents.map((agentBox) => (
          <div
            key={agentBox.id}
            className="w-full md:w-7/12 border-2 rounded-2xl border-purple-300 p-20 bg-purple-50"
          >
            <h3 className="text-4xl">{agentBox.name}</h3>
            <p className="mt-10">{agentBox.description}</p>

            <div className="server_inner_box relative">
              {agentBox.tags.map((tag, i) => (
                <p key={i} className="service_tag">
                  <b>{tag.label}</b>
                </p>
              ))}
            </div>

            <div className="flex flex-col items-start mt-20">
              <p className="text_tag">{agentBox.tag}</p>
              <a href={agentBox.link} className="buy_now mt-20">
                Checkout
              </a>
            </div>
          </div>
        ))}

        <div className="w-full md:w-5/12 flex items-center p-10">
          <img src="/img/HYE.png" alt="HyperExecute" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Server;
