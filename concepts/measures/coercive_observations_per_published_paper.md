# Coercive observations per published paper

## Summary

Coercive observations per published paper normalizes survey-reported coercive citation observations by journal output volume so coercion reports can be compared across journals of different sizes.

## Canonical Form

- Unit of analysis: journal, survey report, coercive observation, publication count, or normalized coercion rate.
- Typical representation: number of coercive observations divided by the number of papers published by the journal in a focal year.
- Measurement target: survey-reported coercive-citation intensity adjusted for journal size.
- Empirical signature: journals with more coercive observations per paper can be compared with bibliometric anomaly scores such as IFBSCP.

## Uses in Science of Science

- Provides the survey-side normalization for [coercive-citation survey linkage](../validations/coercive_citation_survey_linkage.md).
- Helps validate [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md) without comparing raw report counts across large and small journals.
- Links author-experience surveys with [citation metric gaming](../validations/citation_metric_gaming.md) diagnostics.
- Provides a reusable design for normalizing qualitative or survey-based misconduct observations by exposure.

## Operationalization

- Start from a survey or report list where respondents identify journals associated with coercive citation.
- Count coercive observations for each journal under the survey's definition.
- Select a publication-count denominator for the same or relevant focal year.
- Divide observations by published papers to obtain a normalized coercion rate.
- Compare the normalized rate with IFBSCP, journal self-citation rates, or qualitative case evidence.

## Evidence and Validations

- Verified full-text evidence from Chorus and Waltman (2016) uses Wilhite and Fong's survey list of journals identified as coercers.
- Chorus and Waltman restrict the comparison to 64 journals with more than one coercive observation, Web of Science indexing, and computable 2011 IFBSCP.
- The paper divides the number of coercive observations by the number of papers published in the journal in 2011, naming the normalized measure COPPP.
- Journals with the highest COPPP have higher mean and median IFBSCP than the broader Social Sciences comparison group, although not every high-COPPP journal has high IFBSCP.

## Caveats

- COPPP inherits survey biases such as respondent awareness, field scope, and recall.
- Publication count is only an exposure proxy; coercive opportunities may depend on submissions, revisions, or conditional acceptances rather than published papers.
- A low COPPP can reflect underreporting rather than absence of coercion.

## Links

- [coercive-citation survey linkage](../validations/coercive_citation_survey_linkage.md)
- [impact factor biased self-citation practices](impact_factor_biased_self_citation_practices.md)
- [IFBSCP first-diagnosis workflow](../methods/ifbscp_first_diagnosis_workflow.md)
- [citation metric gaming](../validations/citation_metric_gaming.md)
- [journal self-citation rate](journal_self_citation_rate.md)
- [responsible metrics](responsible_metrics.md)

## References

- Chorus, C., & Waltman, L. (2016). A large-scale analysis of impact factor biased journal self-citations. *PLOS ONE*, 11(8), e0161021. https://doi.org/10.1371/journal.pone.0161021 [OpenAlex: W2516374594; Dimensions: pub.1009206842; SciSciNet: W2516374594; WoS: unknown]
- Wilhite, A. W., & Fong, E. A. (2012). Coercive citation in academic publishing. *Science*, 335(6068), 542-543. https://doi.org/10.1126/science.1212540 [OpenAlex: W2068889931; Dimensions: pub.1062448124; WoS: unknown]

## Metadata

- Concept ID: `coercive_observations_per_published_paper`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Chorus and Waltman (2016) (2016)
- Latest seen paper: Chorus and Waltman (2016) (2016)
- Primary reference DOI: `10.1371/journal.pone.0161021`
- OpenAlex ID: `W2516374594`
- Dimensions ID: `pub.1009206842`
- SciSciNet ID: `W2516374594`
- Aliases: COPPP; coercive observations per paper; normalized coercive citation observations; coercion reports per publication
