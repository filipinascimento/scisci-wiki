# Cumulative-advantage urn model

## Summary

Cumulative-advantage urn model is Price's modified urn process in which a success increases the probability of further success, while failure is treated as a non-event rather than a force that increases future failure.

## Canonical Form

- Unit of analysis: urn, entity, success count, draw, transition, or bibliometric population member.
- Typical representation: red balls for successes, black balls for failures, added success balls after successful draws, or limiting success-count distribution.
- Method target: derive a success-breeds-success process without assuming that lack of success actively punishes an entity.
- Empirical signature: a small elite accumulates many successes while many entities terminate or remain with few successes.

## Uses in Science of Science

- Provides the generative model behind [cumulative advantage distribution](cumulative_advantage_distribution.md).
- Clarifies [single-edged success contagion](../mechanisms/single_edged_success_contagion.md), separating Price's process from the negative binomial's double-edged contagion.
- Gives [cumulative advantage](../mechanisms/cumulative_advantage.md) a mechanism that can apply to papers, authors, journals, words, and other count-accumulating entities.
- Bridges older bibliometric laws to later [preferential attachment](../mechanisms/preferential_attachment.md) models.

## Operationalization

- Define a success event, such as a citation, publication, journal use, or word occurrence.
- Start entities with an initial chance of success and failure.
- After each success, increase the probability of future success for the same entity.
- Treat failure or absence of success as terminating or uninformative rather than as increasing future failure probability.
- Derive expected exact and cumulative success-count distributions, then compare them with observed count data.

## Evidence and Validations

- Verified full-text evidence from Price (1976) introduces urn models as a way to describe statistical aftereffects or contagion.
- Price contrasts the Polya urn scheme, where both success and failure reinforce themselves, with a cumulative-advantage urn in which success increases further success while failure does not change probabilities.
- In the simplest limiting case, Price reports that expected cumulative counts follow a harmonic form, with the number of urns having at least n successes equal to N divided by n + 1.
- Price uses this limiting case to motivate broader cumulative-advantage distributions and to connect elite concentration with bibliometric laws.
- The same derivation is complemented by [Beta-function difference table](beta_function_difference_table.md), which moves between exact, cumulative, and success-weighted quantities, and by [cumulative-success birth-rate timescale](../mechanisms/cumulative_success_birth_rate_timescale.md), which translates the process into a temporal rate.
- The model is explicitly framed as useful when lack of publication, lack of citation, or other absence of attention is a non-event.
- When the same logic is applied to citation counts, Price introduces [citation zero-state offset](citation_zero_state_offset.md) because an uncited paper otherwise starts at a zero state where proportional transition rules are undefined.

## Caveats

- The urn model is a stylized derivation, not a direct observation of scientist or reader behavior.
- Real citation and publication systems add aging, field structure, quality, search, institutions, and database coverage.
- Treating failure as a non-event is plausible for some bibliometric settings but not for all evaluation or career processes.

## Links

- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [single-edged success contagion](../mechanisms/single_edged_success_contagion.md)
- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [Beta-function difference table](beta_function_difference_table.md)
- [cumulative-success birth-rate timescale](../mechanisms/cumulative_success_birth_rate_timescale.md)
- [citation zero-state offset](citation_zero_state_offset.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)
- [citation-index time-span scaling](../measures/citation_index_time_span_scaling.md)
- [growth-attachment null models](../validations/growth_attachment_null_models.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `cumulative_advantage_urn_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: Price urn model; cumulative advantage urn; modified Polya urn; success-only urn process
