# IFBSCP threshold-exceedance share

## Summary

IFBSCP threshold-exceedance share measures the fraction of journals whose impact-factor-biased self-citation ratio exceeds a declared cutoff in a given year or field.

## Canonical Form

- Unit of analysis: journal-year, field-year, threshold, or citation database snapshot.
- Typical representation: percent of journals above IFBSCP thresholds such as 1, 1.5, 2, or 3.
- Measurement target: prevalence of extreme impact-factor-window self-citation timing.
- Empirical signature: the high-threshold tail grows when more journals concentrate self-citations in impact-factor years.

## Uses in Science of Science

- Turns [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md) into a population-level trend metric.
- Supports [post-2004 IFBSCP acceleration](post_2004_ifbscp_acceleration.md) by measuring how much of the journal population moves into high-IFBSCP tails.
- Supports [citation metric gaming](../validations/citation_metric_gaming.md) audits by tracking how many journals cross suspicious thresholds.
- Uses the [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md) as the source layer and complements mean IFBSCP.
- Should be interpreted through [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md) and [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md).

## Operationalization

- Compute IFBSCP for each eligible journal-year.
- Choose one or more thresholds, such as 1.5, 2, or 3.
- Divide the number of journals above the threshold by all eligible journals in that year, domain, or comparison group.
- Report threshold choice, database, field domain, self-citation count filter, and citation-window parameter `Y`.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) reports IFBSCP threshold shares across all fields from 1987 to 2015.
- The share of journals with IFBSCP above 1.5 is roughly stable near 33% between 1987 and 2004, then rises to 45% by 2015.
- The share above 2 is stable a little above 10% before rising to almost 19% in 2015.
- The share above 3 is stable around 2% from 1987 to the early 2000s, then nearly triples to 5.6% in 2015.

## Caveats

- Thresholds are screening choices, not misconduct definitions.
- Population changes in the journal set can affect time trends.
- Legitimate recent self-citation mechanisms can also increase threshold exceedance.

## Links

- [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md)
- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [journal self-citation count reliability filter](../validations/journal_self_citation_count_reliability_filter.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [post-2004 IFBSCP acceleration](post_2004_ifbscp_acceleration.md)
- [IFBSCP window sensitivity](../validations/ifbscp_window_sensitivity.md)
- [journal self-citation rate](journal_self_citation_rate.md)
- [journal impact factor](journal_impact_factor.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [responsible metrics](responsible_metrics.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]

## Metadata

- Concept ID: `ifbscp_threshold_exceedance_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP tail share; high-IFBSCP journal share; IFBSCP threshold prevalence; journal self-citation timing tail
