# Impact-factor attention lag alignment

## Summary

Impact-factor attention lag alignment compares the timing of rising attention to the journal impact factor with later changes in journal self-citation behavior.

## Canonical Form

- Unit of analysis: year, journal population, impact-factor discourse indicator, IFBSCP trend, field domain, or lagged comparison.
- Typical representation: time-series alignment between impact-factor salience measures and later self-citation anomaly trends.
- Validation target: assess whether metric-gaming signals rise after the metric becomes more salient to researchers, editors, and institutions.
- Empirical signature: attention to the impact factor rises before or around the period when IFBSCP mean values and high-threshold shares accelerate.

## Uses in Science of Science

- Provides circumstantial timing evidence for [post-2004 IFBSCP acceleration](../measures/post_2004_ifbscp_acceleration.md).
- Links [impact-factor publication pressure](../mechanisms/impact_factor_publication_pressure.md) and [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md) to observed journal self-citation trends.
- Helps interpret [indicator systemic effects](../mechanisms/indicator_systemic_effects.md) by comparing metric salience with later behavior change.
- Adds a temporal validation layer to [citation metric gaming](citation_metric_gaming.md) without claiming journal-specific causality.

## Operationalization

- Choose one or more impact-factor attention proxies, such as papers mentioning "impact factor" in titles, editorials about the impact factor, policy documents, or assessment criteria.
- Estimate IFBSCP trend measures such as mean IFBSCP or threshold-exceedance share over the same calendar range.
- Compare the timing of attention growth and IFBSCP growth, allowing plausible lags.
- Stratify by domain where the attention proxy is domain-specific.
- Treat alignment as circumstantial evidence that needs mechanism-specific corroboration.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) reports that IFBSCP values begin increasing in the first years of the new millennium.
- The paper cites Hicks et al. (2015) as showing that papers with "impact factor" in the title increased steadily from the second half of the 1990s.
- Chorus and Waltman argue that allowing for a delay of a few years, the IFBSCP increase matches the growing interest in the impact factor.
- The paper also notes that Life Sciences journals publish more editorials about the impact factor, matching the higher Life Sciences IFBSCP levels observed in their analysis.

## Caveats

- Temporal alignment is not causal identification.
- Attention proxies can capture criticism of impact factor as well as strategic interest in it.
- Database expansion, field mix, and legitimate recent self-citation mechanisms can also affect IFBSCP trends.
- Lag choices should be stated before interpretation.

## Links

- [post-2004 IFBSCP acceleration](../measures/post_2004_ifbscp_acceleration.md)
- [impact-factor publication pressure](../mechanisms/impact_factor_publication_pressure.md)
- [editorial impact-factor pressure channel](../mechanisms/editorial_impact_factor_pressure_channel.md)
- [indicator systemic effects](../mechanisms/indicator_systemic_effects.md)
- [citation metric gaming](citation_metric_gaming.md)
- [domain-specific IFBSCP gradient](domain_specific_ifbscp_gradient.md)
- [journal impact factor](../measures/journal_impact_factor.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]
- Hicks, D., Wouters, P., Waltman, L., de Rijcke, S., & Rafols, I. (2015). Bibliometrics: The Leiden Manifesto for research metrics. *Nature*, 520, 429-431. https://doi.org/10.1038/520429a [OpenAlex: W2068452509; Dimensions: pub.1033957063; WoS: unknown]

## Metadata

- Concept ID: `impact_factor_attention_lag_alignment`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: impact-factor salience lag; IFBSCP attention alignment; impact-factor discourse timing; metric-salience self-citation alignment
