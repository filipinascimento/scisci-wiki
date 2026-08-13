# Bradford-Lotka elite-zone law

## Summary

Bradford-Lotka elite-zone law is Price's derivation that rank zones in cumulative-advantage populations produce elite concentration, including Bradford journal zones and Price's square-root law for author productivity.

## Canonical Form

- Unit of analysis: journal rank list, author productivity list, citation-source collection, library collection, or any ranked success population.
- Typical representation: cumulative success by rank, logarithmic rank relation, geometric Bradford zones, or top square-root elite share.
- Method target: derive elite concentration from the limiting cumulative-advantage case.
- Empirical signature: a small top-ranked set accounts for a large share of use, citations, or publications.

## Uses in Science of Science

- Gives [attention inequality](../mechanisms/attention_inequality.md) a rank-zone derivation grounded in [cumulative advantage](../mechanisms/cumulative_advantage.md).
- Connects [journal citation frequency](../measures/journal_citation_frequency.md), [citation-based source selection](citation_based_source_selection.md), and [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md).
- Provides a historical bridge between Bradford's journal-use law and Lotka's author-productivity law.
- Helps document why source collections and evaluation databases often rely on ranked core journals while also raising coverage-bias concerns.

## Operationalization

- Rank entities by success count, such as citations, uses, or publications.
- Compute cumulative success from the top of the ranking downward.
- Test whether cumulative success grows approximately with the logarithm of rank.
- Compare geometric increases in rank zones against arithmetic increases in accumulated success.
- For author productivity, test whether the top square root of the population accounts for about half of total papers.

## Evidence and Validations

- Verified full-text evidence from Price (1976) shows that in the limiting cumulative-advantage case, total success accumulated from the top of a ranked list is proportional to the logarithm of rank.
- Price states that this logarithmic rank relation provides the basis for the Bradford distribution, where geometric increases in rank correspond to arithmetic increases in total score.
- Price also connects the same mathematical basis to Price's law: the top square root of authors produces at least half of all papers in a population.
- The paper argues that Bradford and Lotka laws are special cases of the same underlying cumulative-advantage theory, with deviations expected when the limiting case is only approached.
- Price uses the same logic to explain why a selected top source-journal set can capture a large fraction of citations or citable papers.

## Caveats

- Rank-zone laws are sensitive to entity definition, source coverage, and tail completeness.
- Elite concentration does not by itself prove cumulative advantage; quality heterogeneity, field size, and selection rules can also produce skew.
- The square-root rule is an approximation and should be tested against finite career duration and multi-author credit conventions.

## Links

- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [cumulative-advantage urn model](cumulative_advantage_urn_model.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)
- [citation-based source selection](citation_based_source_selection.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `bradford_lotka_elite_zone_law`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: Bradford zones; Price square-root law; Lotka elite productivity; logarithmic rank success law
