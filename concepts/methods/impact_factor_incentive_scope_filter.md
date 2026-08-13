# Impact-factor incentive-scope filter

## Summary

Impact-factor incentive-scope filter restricts impact-factor-manipulation analyses to fields and journals where impact factors exist and plausibly create self-citation incentives.

## Canonical Form

- Unit of analysis: journal, field, index family, impact-factor eligibility, or metric-gaming panel.
- Typical representation: inclusion rule excluding fields without impact factors or weak impact-factor incentives.
- Method target: align a gaming screen with the incentive structure it is meant to detect.
- Empirical signature: the analysis excludes source areas where the target metric is absent or weakly salient.

## Uses in Science of Science

- Defines the scope for [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md).
- Grounds [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md) in a plausible incentive environment.
- Links [journal impact factor](../measures/journal_impact_factor.md) to field-specific metric salience.
- Complements [SSH bibliometric coverage gap](../validations/ssh_bibliometric_coverage_gap.md) by distinguishing source coverage from incentive scope.

## Operationalization

- Identify the journal indexes and fields where the focal metric exists.
- Exclude fields where the metric is absent or has low incentive relevance for the behavior under study.
- Document the excluded fields and the rationale for exclusion.
- Report remaining field sizes and journal-year counts after reliability filters.
- Avoid generalizing the resulting behavioral trend to excluded fields.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) extracts Web of Science citation data for Sciences and Social Sciences but excludes Arts and Humanities.
- The paper justifies the exclusion because Arts and Humanities journals do not have impact factors and editors therefore have less incentive to engage in coercive self-citation practices.
- The same data section reports field sizes for Social Sciences, Physical Sciences, and Life Sciences after applying the IFBSCP reliability filter.

## Caveats

- Incentive scope can change when platforms introduce new metrics or institutions change evaluation rules.
- Excluded fields may still have other citation or ranking incentives.
- The filter should not be mistaken for a claim that excluded fields are free of metric gaming.

## Links

- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [SSH bibliometric coverage gap](../validations/ssh_bibliometric_coverage_gap.md)
- [domain-specific IFBSCP gradient](../validations/domain_specific_ifbscp_gradient.md)
- [journal-panel census inference caveat](../validations/journal_panel_census_inference_caveat.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]

## Metadata

- Concept ID: `impact_factor_incentive_scope_filter`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: impact-factor scope filter; metric-incentive panel filter; IFBSCP field inclusion rule; impact-factor eligibility screen
