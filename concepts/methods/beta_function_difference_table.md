# Beta-function difference table

## Summary

Beta-function difference table is Price's tabular method for moving between exact success frequencies, cumulative frequencies, and total-success quantities in cumulative-advantage distributions.

## Canonical Form

- Unit of analysis: success count, exact frequency, cumulative frequency, total-success count, or Beta-function column.
- Typical representation: adjacent Beta-function columns whose finite differences convert among distribution summaries.
- Method target: make the cumulative-advantage distribution operational for bibliometric count data.
- Empirical signature: exact, cumulative, and weighted success distributions can be read from related table columns.

## Uses in Science of Science

- Provides a calculation layer under [cumulative advantage distribution](cumulative_advantage_distribution.md).
- Connects bibliometric laws such as [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md) to fitted distribution tables.
- Helps interpret [citation distribution scaling](../measures/citation_distribution_scaling.md) as more than a plotted tail.

## Operationalization

- Define the success count of interest, such as citations, publications, or journal uses.
- Fit or tabulate a Beta-function cumulative-advantage distribution.
- Use adjacent table columns to recover exact counts, cumulative counts, or success-weighted totals.
- Compare the derived summaries with observed bibliometric frequencies.

## Evidence and Validations

- Verified full-text evidence from Price (1976) explains that adjacent Beta-function columns convert exact frequencies to cumulative frequencies and total successes.
- Price uses this table logic to relate the theoretical cumulative-advantage distribution to empirical bibliometric data.
- The method supports finite-count interpretation of the broader success-breeds-success process.

## Caveats

- The table is a compact analytic device, not a full generative model by itself.
- Empirical fit still depends on collection boundaries, uncited or zero-success cases, and aging.
- Modern implementations should document whether they fit exact, cumulative, or weighted distributions.

## Links

- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md)
- [cumulative-advantage urn model](cumulative_advantage_urn_model.md)
- [citation zero-state offset](citation_zero_state_offset.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; SciSciNet: W2080450835; WoS: unknown]

## Metadata

- Concept ID: `beta_function_difference_table`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: Beta-function CAD table; cumulative advantage difference table; exact-cumulative frequency conversion; Price Beta-function table
