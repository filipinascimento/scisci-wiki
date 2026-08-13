# Average-normalization skewness check

## Summary

Average-normalization skewness check is the validation question of whether dividing citations by a field-year mean aligns the whole skewed citation distribution, not only its average.

## Canonical Form

- Unit of analysis: paper, field-year reference set, citation distribution, mean baseline, or normalized citation score.
- Typical representation: rescaled distribution plot, tail comparison, log-binned histogram, or collapse diagnostic.
- Validation target: determine whether a mean denominator is meaningful for heavy-tailed citation data.
- Empirical signature: normalized distributions from different fields align across low, middle, and tail regions after rescaling.

## Uses in Science of Science

- Validates [mean normalized citation score](../measures/mean_normalized_citation_score.md) and related ratio indicators.
- Underlies [universal citation distribution collapse](universal_citation_distribution_collapse.md).
- Connects to [lognormal relative-citation curve](lognormal_relative_citation_curve.md) and [average-based ranking tail leverage](average_based_ranking_tail_leverage.md).
- Helps decide whether average normalization is sufficient or whether percentile and tail-specific indicators are needed.

## Operationalization

- Compute citation counts and the field-year average.
- Divide each paper's citation count by the average baseline.
- Compare full normalized distributions, not only mean values.
- Inspect whether tail behavior, uncited mass, and field outliers remain misaligned.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) motivates field normalization by noting large field differences in citation distributions.
- The paper validates average-based rescaling by showing that normalized citation distributions collapse across several fields.
- This motif is distinct from the normalized score itself because it is the diagnostic that justifies or rejects mean normalization.
- It is important because citation distributions are highly skewed and averages can be tail-dominated.

## Caveats

- A good distribution collapse in one dataset or taxonomy may fail under another field classification.
- Mean normalization can still hide field differences in uncited papers or extreme tails.
- Percentile indicators may be preferable when tail robustness is the main objective.

## Links

- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [universal citation distribution collapse](universal_citation_distribution_collapse.md)
- [lognormal relative-citation curve](lognormal_relative_citation_curve.md)
- [average-based ranking tail leverage](average_based_ranking_tail_leverage.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `average_normalization_skewness_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: mean-normalization distribution check; skewed citation mean-normalization check; citation average scaling diagnostic; full-distribution mean-normalization validation
