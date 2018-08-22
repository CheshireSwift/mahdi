import * as React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import * as Konva from 'konva';

import Layout from '../components/layout';

class ColouredRect extends React.PureComponent<{}, { color: string }> {
  state = {
    color: 'green',
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  }
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

interface MahdiStageProps {
  window: Optional<{ innerWidth: number; innerHeight: number }>;
  children: JSX.Element;
}
const MahdiStage = ({
  window = { innerWidth: 0, innerHeight: 0 },
  children,
}: MahdiStageProps) => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    {children}
  </Stage>
);

const IndexPage = () => (
  <Layout>
    <MahdiStage window={typeof window !== 'undefined' && window}>
      <Layer>
        <Text text="clicky" />
        <ColouredRect />
      </Layer>
    </MahdiStage>
  </Layout>
);

export default IndexPage;
