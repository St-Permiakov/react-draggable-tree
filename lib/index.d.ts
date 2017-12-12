import React = require("react");
export declare type Key = string | number;
export interface TreeNode {
    children: this[] | undefined;
    collapsed: boolean;
    key: Key;
}
export interface TreeRowInfo {
    node: TreeNode;
    selected: boolean;
    path: number[];
    visible: boolean;
    visibleOffset: number;
}
export interface TreeProps {
    root: TreeNode;
    rowHeight: number;
    indent?: number;
    className?: string;
    rowClassName?: string;
    rowSelectedClassName?: string;
    childrenClassName?: string;
    dropOverIndicatorClassName?: string;
    dropBetweenIndicatorClassName?: string;
    toggler?: React.ComponentType<TogglerProps>;
    selectedKeys: Set<Key>;
    rowContent: React.ComponentType<TreeRowInfo>;
    onMove: (src: TreeRowInfo[], dest: TreeRowInfo, destIndex: number, destPathAfterMove: number[]) => void;
    onCopy: (src: TreeRowInfo[], dest: TreeRowInfo, destIndex: number) => void;
    onContextMenu?: (info: TreeRowInfo | undefined, ev: React.MouseEvent<Element>) => void;
    onCollapsedChange: (info: TreeRowInfo, collapsed: boolean) => void;
    onSelectedKeysChange: (selectedKeys: Set<Key>, selectedInfos: TreeRowInfo[]) => void;
}
export declare class TreeView extends React.Component<TreeProps, {}> {
    private element;
    private dropIndicator;
    private infoToPath;
    private pathToInfo;
    private visibleInfos;
    private keyToInfo;
    private rootInfo;
    private removeAncestorsFromSelection(selection);
    private propsWithDefaults();
    private clearRows();
    private addRowInfo(rowInfo);
    private renderNode(node, path, visible);
    private keysToInfos(keys);
    private updateDropIndicator(target);
    render(): JSX.Element;
    private onClickRow;
    private onContextMenu;
    private onDragOver;
    private getDropTarget(ev);
    private canDrop(destInfo, destIndex);
    private onDrop;
}
export interface TogglerProps {
    visible: boolean;
    collapsed: boolean;
    onClick: (ev: React.MouseEvent<Element>) => void;
}
