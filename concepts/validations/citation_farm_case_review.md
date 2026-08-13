# Citation farm case review

## Summary

Citation farm case review is the validation workflow of treating extreme self-citation or citation-source concentration as a flag for manual investigation rather than as automatic proof of misconduct.

## Canonical Form

- Unit of analysis: author profile, citation cluster, citing-paper set, self-citation share, or evaluation case.
- Typical representation: high-self-citation flag, high citation-to-citing-paper ratio, cluster inspection, case note, or exclusion decision.
- Validation target: whether anomalous citation indicators reflect legitimate research structure, data error, self-citation, reciprocal citation, or citation farming.
- Empirical signature: extreme metric values trigger qualitative review because simple automatic corrections cannot fully distinguish benign from spurious citation patterns.

## Uses in Science of Science

- Provides a case-review layer for [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md) and [citation source concentration ratio](../measures/citation_source_concentration_ratio.md).
- Specializes broad [citation metric gaming](citation_metric_gaming.md) audits for author-level indicator datasets.
- Protects [citation elite concentration](../measures/citation_elite_concentration.md) and [standardized author citation database](../datasets/standardized_author_citation_database.md) from anomalous tail cases.
- Helps [responsible metrics](../measures/responsible_metrics.md) users avoid both naive acceptance and automatic condemnation of extreme profiles.

## Operationalization

- Flag author profiles with extreme self-citation shares, unusual citation-to-citing-paper ratios, or concentrated reciprocal citation clusters.
- Inspect citing papers, coauthor overlap, field norms, review articles, methods/software papers, and database disambiguation.
- Check whether self-citation removal materially changes the profile and whether non-self citation concentration remains.
- Document whether the case is benign, unresolved, data-error driven, or likely manipulative.
- Avoid using flagged metrics in high-stakes evaluation until the case review is resolved.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) warns that extreme self-citations and citation farms can make citation metrics spurious and meaningless.
- The paper advises against using any citation metrics when self-citation proportions are very high unless the cases are examined individually.
- Ioannidis et al. state that simply removing self-citations may not suffice in extreme cases.
- The same study also recommends deeper assessment of high citation-to-citing-paper ratios because these may indicate either benign bundled citation patterns or spurious citation farms.

## Caveats

- A flag is not a finding of misconduct.
- Manual review can be labor-intensive and may require domain expertise.
- Legitimate research programs, shared methods, datasets, or software can produce concentrated citation patterns.
- Review decisions should be reproducible enough for audit but careful about public accusation risk.

## Links

- [self-citation-excluded author metrics](../measures/self_citation_excluded_author_metrics.md)
- [citation source concentration ratio](../measures/citation_source_concentration_ratio.md)
- [citation metric gaming](citation_metric_gaming.md)
- [citation elite concentration](../measures/citation_elite_concentration.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `citation_farm_case_review`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: citation farm review; extreme self-citation case review; citation anomaly case audit; spurious citation case review
