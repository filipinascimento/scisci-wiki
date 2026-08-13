# Domain-specific IFBSCP gradient

## Summary

Domain-specific IFBSCP gradient compares impact-factor-biased journal self-citation across broad scientific domains to identify whether metric-gaming signals vary by field context.

## Canonical Form

- Unit of analysis: field domain, journal-year, IFBSCP value, threshold exceedance, or citation database stratum.
- Typical representation: domain-specific mean IFBSCP curves and high-threshold shares.
- Validation target: check whether a journal self-citation timing screen behaves similarly across Life, Physical, and Social Sciences.
- Empirical signature: all domains move in the same direction, but some domains have higher levels or stronger high-threshold tails.

## Uses in Science of Science

- Adds field-context interpretation to [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md).
- Helps [responsible metrics](../measures/responsible_metrics.md) avoid treating one global threshold as equally meaningful across domains.
- Connects [journal impact factor](../measures/journal_impact_factor.md), [field-specific indicator suites](../methods/field_specific_indicator_suites.md), and [citation metric gaming](citation_metric_gaming.md).

## Operationalization

- Assign journals to broad field domains in the source database.
- Compute mean IFBSCP and high-threshold shares by domain and year.
- Compare domain levels and trends while reporting eligible journal counts.
- Interpret field differences alongside domain-specific citation density, publication volume, journal age, and impact-factor salience.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) compares IFBSCP trends across Social Sciences, Physical Sciences, and Life Sciences.
- All three domains show the pronounced post-early-2000s increase in mean IFBSCP and high-IFBSCP journal share.
- Life Sciences journals have higher mean IFBSCP and a higher share of high-IFBSCP journals than Social and Physical Sciences.
- In the most recent years of the panel, the percentage of journals with IFBSCP above 3 is almost twice as high in Life Sciences as in Physical Sciences.

## Caveats

- Broad domain labels can hide large subfield differences.
- Domain differences may reflect legitimate citation speed, journal size, article type, or topical concentration rather than misconduct.
- Field-specific baselines should be refreshed when using newer Web of Science, Dimensions, Scopus, or OpenAlex data.

## Links

- [impact factor biased self-citation practices](../measures/impact_factor_biased_self_citation_practices.md)
- [IFBSCP threshold-exceedance share](../measures/ifbscp_threshold_exceedance_share.md)
- [WoS IFBSCP journal-year panel](../datasets/wos_ifbscp_journal_year_panel.md)
- [citation metric gaming](citation_metric_gaming.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [field-specific indicator suites](../methods/field_specific_indicator_suites.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; WoS: unknown]

## Metadata

- Concept ID: `domain_specific_ifbscp_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: IFBSCP field gradient; domain-specific journal self-citation timing; Life Sciences IFBSCP gradient; field-context IFBSCP validation
