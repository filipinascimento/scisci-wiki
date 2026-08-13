# Top-percentile publication share

## Summary

Top-percentile publication share measures the fraction of a portfolio's papers that fall within a highly cited percentile class of their field-year reference sets.

## Canonical Form

- Unit of analysis: paper, portfolio, institution, country, funder, journal, field-year cell, or evaluation unit.
- Typical representation: PP(top 10%), top 1 percent share, highly cited publication proportion, or field-normalized excellence rate.
- Measurement target: share of output reaching a high-citation tail after field and year normalization.
- Empirical signature: a portfolio has more or fewer top-percentile papers than expected under the chosen percentile threshold.

## Uses in Science of Science

- Operationalizes the proportion form of [citation percentile indicators](citation_percentile_indicators.md).
- Distribution-aware complement to [mean normalized citation score](mean_normalized_citation_score.md), which can be dominated by extreme citation counts.
- Used in institutional rankings, funding evaluations, and studies of [attention inequality](../mechanisms/attention_inequality.md).
- Provides a compact top-tail outcome for novelty, interdisciplinarity, team-size, and career studies.
- Has a cohort-outcome specialization in [hit-paper probability](hit_paper_probability.md).

## Operationalization

- Build a reference set by field, publication year, document type, and citation window.
- Choose a percentile threshold, commonly top 1 percent, top 5 percent, or top 10 percent.
- Rank papers within each reference set by citation count.
- Apply a documented tie-handling rule at the percentile boundary.
- Count or fractionally count portfolio papers above the threshold and divide by total portfolio output.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) describes normalized indicators based on highly cited publications using field-dependent thresholds.
- Waltman notes that the top 10 percent most highly cited publication share is important in the CWTS Leiden Ranking and SCImago Institutions Rankings.
- The review highlights a practical tie-handling problem: many papers can have the same citation count at the threshold, making exact percentile shares nontrivial.
- Waltman also distinguishes binary top-percentile indicators from percentile-class approaches that assign publications to several citation-distribution classes.
- Verified full-text evidence from Wang, Jones, and Wang (2019) uses a top-5% field-year threshold to define hit papers when comparing near-miss and narrow-win NIH R01 applicants.

## Caveats

- Top-percentile shares are sensitive to reference-set definition, threshold choice, tie handling, and small portfolio size.
- They ignore variation within the top tail and below the threshold.
- A high top-percentile share is still a citation-attention measure, not a direct measure of quality or social value.

## Links

- [citation percentile indicators](citation_percentile_indicators.md)
- [hit-paper probability](hit_paper_probability.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [responsible metrics](responsible_metrics.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `top_percentile_publication_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Waltman (2016) (2016)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Dimensions ID: `pub.1051718960`
- SciSciNet ID: `W767067438`
- Aliases: PP(top 10%); highly cited publication share; top 10 percent paper share; excellence rate
