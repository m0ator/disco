import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import './Tree.css';

export const Tree = ({
  data,
  defaultExpandedKeys = [],
  selectedKeys = [],
  onSelect,
  className = ''
}) => {
  return (
    <div className={`tree ${className}`}>
      {data.map((node) => (
        <TreeNode
          key={node.key}
          node={node}
          level={0}
          defaultExpandedKeys={defaultExpandedKeys}
          selectedKeys={selectedKeys}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

const TreeNode = ({
  node,
  level,
  defaultExpandedKeys,
  selectedKeys,
  onSelect
}) => {
  const [expanded, setExpanded] = useState(
    defaultExpandedKeys.includes(node.key)
  );

  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedKeys.includes(node.key);

  const handleExpand = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    onSelect?.(node.key, node);
  };

  return (
    <div className="tree-node">
      <div 
        className={`
          tree-node-content
          ${isSelected ? 'selected' : ''}
        `}
        style={{ paddingLeft: `${level * 24}px` }}
        onClick={handleSelect}
      >
        {hasChildren && (
          <button 
            className={`expand-button ${expanded ? 'expanded' : ''}`}
            onClick={handleExpand}
          >
            <Icon name="chevron_right" />
          </button>
        )}

        {node.icon && (
          <div className="node-icon">
            <Icon name={node.icon} />
          </div>
        )}

        <div className="node-label">{node.label}</div>

        {node.suffix && (
          <div className="node-suffix">
            {node.suffix}
          </div>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="tree-node-children">
          {node.children.map((child) => (
            <TreeNode
              key={child.key}
              node={child}
              level={level + 1}
              defaultExpandedKeys={defaultExpandedKeys}
              selectedKeys={selectedKeys}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// 目录树
export const DirectoryTree = ({
  data,
  defaultExpandedKeys = [],
  selectedKeys = [],
  onSelect,
  className = ''
}) => {
  return (
    <Tree
      data={data.map(node => ({
        ...node,
        icon: node.children?.length ? 'folder' : 'description'
      }))}
      defaultExpandedKeys={defaultExpandedKeys}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      className={`directory-tree ${className}`}
    />
  );
}; 