import { LoadingOutlined } from "@ant-design/icons";

/**
 *
 * @param {import("@ant-design/icons/lib/components/AntdIcon").AntdIconProps} props
 * @returns
 */
export function Loading(props) {
  return <LoadingOutlined {...props} spin />;
}
