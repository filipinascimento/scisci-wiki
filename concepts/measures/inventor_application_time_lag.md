# Inventor application time lag

## Summary

Inventor application time lag measures the delay between consecutive patent applications by the same inventor, providing a timing control for inventor career histories and field-switching analyses.

## Canonical Form

- Unit of analysis: inventor, adjacent patent pair, patent application date, patent grant delay, or inventor career segment.
- Typical representation: years or days between consecutive applications, lag-window restriction, right-censoring flag, or application-to-grant delay filter.
- Measurement target: elapsed time between observed inventive outputs.
- Empirical signature: longer gaps can indicate slower production, retooling, field switching, or unobserved patenting gaps.

## Uses in Science of Science

- Supports [patent field-jump specialization](patent_field_jump_specialization.md) by controlling for the fact that longer gaps give inventors more opportunity to switch fields.
- Provides a career-history timing layer for [age at first invention](age_at_first_invention.md) and [patent application-year time anchor](../methods/patent_application_year_time_anchor.md).
- Helps distinguish increasing training age from changes in the lag between first active work and first observed patent output.
- Gives truncation diagnostics for patent-panel analyses that use consecutive applications.

## Operationalization

- Identify inventors across patent records using a name-disambiguation rule or linked inventor identifier.
- Sort each inventor's patents by application date.
- Compute the elapsed time between adjacent applications.
- Restrict to observed pairs within a fixed lag window when right-censoring near the end of the patent data would otherwise shorten observed lags.
- Use application-to-grant delay filters when grant-only records omit not-yet-granted applications.
- Include the lag as a control when modeling field-switching probability or career-output timing.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) defines time lag as the delay between consecutive patent applications from the same inventor.
- Jones builds patent histories by matching inventor last name, first name, and middle initial.
- In the field-jump analysis, Jones notes that inventors are more likely to switch fields when more time passes between applications, so truncation can falsely imply rising specialization.
- The paper restricts the main specialization trend to consecutive innovations where the second application occurs within three years and both patents are granted within three years of application.
- Jones also reports elsewhere that time lags between inventions are short, do not trend over time, and vary only modestly across fields, supporting age at first invention as a proxy for the end of the education phase.

## Caveats

- Name-based inventor matching can merge homonyms or split the same inventor across name variants.
- Missing or delayed grants create right-censoring in recent application windows.
- Patent application lags omit unpatented inventions, abandoned applications, and work conducted before filing.
- A long lag can indicate field reeducation, organizational delay, strategic filing, or sparse inventive output.

## Links

- [patent field-jump specialization](patent_field_jump_specialization.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [age at first invention](age_at_first_invention.md)
- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [knowledge depth citation trees](knowledge_depth_citation_trees.md)
- [author-name blocking](../methods/author_name_blocking.md)
- [homonym and synonym author errors](../validations/homonym_synonym_author_errors.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `inventor_application_time_lag`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: patent application lag; consecutive invention lag; inventor output gap; application-to-application delay
