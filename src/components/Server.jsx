import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBoxes, fetchAgentBoxes } from "../components/boxSlice";

const Server = () => {
  const dispatch = useDispatch();
  const { items, agents, loading, error } = useSelector(
    (state) => state.storebox,
  );

  useEffect(() => {
    dispatch(fetchBoxes());
    dispatch(fetchAgentBoxes());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="bg-gray !py-20">
      {/* Header */}
      <div className="w-full mt-70 mb-60 container">
        <h2 className="text-6xl">Explore our MCP Server</h2>
        <p className="text-[18px] mt-10">
          Find your suitable MCP Server in one place, from setup to tools
        </p>
      </div>

      {/* Product Boxes */}
      <div className="flex gap-2 server_cont container w-full flex-wrap md:flex-nowrap">
        {items.map((box) => (
          <div key={box.id} className="server_box !py-8 !px-3 w-full ">
            <h3 className="text-[20px] font-medium underline">{box.title}</h3>
            <div className="server_inner_box mt-4 relative">
              {box.tags.map((tag) => (
                <p key={tag.id} className="service_tag mb-2">
                  <b>{tag.label}</b>
                  {tag.description}
                </p>
              ))}
            </div>
            <Link
              to={`/product/${box.slug}`}
              className="buy_now mt-20 inline-block font-medium"
            >
              See to view
            </Link>
          </div>
        ))}
      </div>

      {/* Agent Section */}
      <div className="mt-20 flex flex-wrap md:flex-nowrap container">
        {agents.map((agentBox) => (
          <div
            key={agentBox.id}
            className="w-full md:w-7/12 !py-10 !px-8 border-2 rounded-2xl border-purple-300 bg-purple-50 leading-loose"
          >
            <h3 className="text-3xl">{agentBox.name}</h3>
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
              <a href={agentBox.link} className="buy_now mt-20 font-medium">
                See to view
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
