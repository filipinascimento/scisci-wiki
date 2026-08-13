# Historical newness lookback window

## Summary

Historical newness lookback window is the validation motif that recombination novelty depends on how far back the database is searched for prior appearances of the same component pair.

## Canonical Form

- Unit of analysis: cited-journal pair, concept pair, reference pair, publication year, or historical database window.
- Typical representation: first-observed pair, finite lookback period, obsolescence assumption, or left-censoring warning.
- Validation target: distinguish truly new combinations from combinations that are only new within the available historical record.
- Empirical signature: a combination is labeled novel because it was not observed during the chosen lookback window.

## Uses in Science of Science

- Adds a coverage caveat to [new journal-pair novelty](../measures/new_journal_pair_novelty.md).
- Connects novelty measurement to [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) and [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).
- Helps interpret [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md) and [new journal-pair novelty filter robustness](new_journal_pair_novelty_filter_robustness.md).
- Applies to any novelty measure based on first observed co-occurrence.

## Operationalization

- Define the historical window used to search for prior co-occurrences.
- Report database start year, reference coverage, and field coverage.
- Test sensitivity to longer or shorter lookback windows when possible.
- Treat combinations near the database boundary as potentially left-censored.
- Separate an explicit obsolescence assumption from missing historical data.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) checks whether cited-journal pairs in 2001 had appeared back to 1980.
- The paper treats this as a 20-year historical window, implicitly allowing older combinations to become effectively obsolete for novelty classification.
- This supports a reusable caveat: finite database history can become part of the novelty definition.

## Caveats

- A longer lookback window can reduce measured novelty but may include obsolete or weakly relevant prior combinations.
- Database coverage before a start year can differ by field and language.
- Historical absence in a bibliographic database is not proof that a knowledge combination was never made.

## Links

- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [new journal-pair novelty filter robustness](new_journal_pair_novelty_filter_robustness.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [journal-pair entity proxy boundary](journal_pair_entity_proxy_boundary.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `historical_newness_lookback_window`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: novelty lookback window; historical first-observed pair boundary; recombination left-censoring; prior-pair search window
