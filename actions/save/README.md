# socialgouv/dashlord-save-action

Save results from various URL scanners into a single folder for DashLord

## Usage

```yaml
jobs:
  scans:
    steps:
      - uses: "socialgouv/dashlord-actions/save@master"
        with:
          json: ${{ matrix.json }}
```
