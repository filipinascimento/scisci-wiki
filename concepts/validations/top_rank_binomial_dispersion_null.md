# Top-rank binomial dispersion null

## Summary

Fair top-ranked citation lists can be checked against a binomial-style null for field-share dispersion.

## Canonical Form

- Unit of analysis: top-ranked paper set, field share, rank bin, normalized score, or dispersion statistic.
- Typical representation: null expectation for field representation in top-z citation rankings.
- Mechanism, measurement, or validation target: fairness of top-percentile rankings after field normalization.
- Empirical signature: field shares in top-ranked bins are close to expected binomial dispersion after normalization but not under raw counts.

## Uses in Science of Science

- Refines top-percentile citation validation by linking it to [field balanced top rank representation](field_balanced_top_rank_representation.md) and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Useful as a reusable check when [top percentile publication share](../measures/top_percentile_publication_share.md) is used in science-of-science inference.
- Creates cross-links to [relative citation performance cf](../measures/relative_citation_performance_cf.md) so the motif is not interpreted in isolation.

## Operationalization

- Rank pooled papers by raw citation counts and normalized citation scores.
- Compute each field's share among the top-ranked or top-percentile set.
- Compare observed field-share dispersion to the expected binomial-style standard deviation.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) derives an expected standard deviation for top-rank bin heights and contrasts raw-citation dispersion with normalized `cf` dispersion.
- The diagnostic makes top-rank fairness visible rather than relying only on distribution plots.

## Caveats

- The null assumes uniform scattering along the rank axis.
- It does not model clustered journals, field dependence, or multi-field papers.

## Links

- [Field-balanced top-rank representation](field_balanced_top_rank_representation.md)
- [Citation percentile indicators](../measures/citation_percentile_indicators.md)
- [Top-percentile publication share](../measures/top_percentile_publication_share.md)
- [Relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [Bare-citation field odds gap](bare_citation_field_odds_gap.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `top_rank_binomial_dispersion_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: top-z dispersion null; field-share ranking null; bin-height fairness diagnostic
