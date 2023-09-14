import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '更强大',
    Svg: require('@site/static/img/mv_ld_4ch.svg').default,
    description: (
      <>
        为追求高一致性、高UPH的的机器视觉设备设计，光源驱动器支持3000级调光，支持设备闭环光源校正，实现更高一致性。IO触发切换的组合光功能大大降低组合光切换时延，为检测时间争分夺秒。
      </>
    ),
  },
  {
    title: '更好用',
    Svg: require('@site/static/img/software.svg').default,
    description: (
      <>
        优化的交互设计，配备高分辨率彩色显示屏和旋转编码器，可以实现设备端的快速操作。为此开发的上位机软件，可以进行快速协议通信验证。无论是设备端还是上位机端，都可以快速上手使用设备。
      </>
    ),
  },
  {
    title: '更可靠',
    Svg: require('@site/static/img/usb.svg').default,
    description: (
      <>
        不像其他设备使用简易的RS232或者485协议作为通信接口，而是采用真USB协议，抗干扰能力更强，与上位机通信丢包率更低，搭配高可靠性的电路设计，在复杂电磁环境下设备的可靠性更有保障。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
