# Sleeping-beauty field-origin profile

## Summary

Sleeping-beauty field-origin profile measures which fields or journal categories disproportionately produce high delayed-recognition papers.

## Canonical Form

- Unit of analysis: paper, JCR subject category, field, journal, or high-B subset.
- Typical representation: fraction of top sleeping beauties by field, field-rank table, or top-B subject-category profile.
- Measurement target: field origins of delayed-recognition candidates.
- Empirical signature: some disciplines contribute a larger share of top-B papers than expected from generic narratives about sleeping beauties.

## Uses in Science of Science

- Connects [sleeping beauty](../mechanisms/sleeping_beauty.md) to field-level production environments.
- Helps compare monodisciplinary and multidisciplinary evidence in the [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md).
- Supports mechanisms such as [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md), [field emergence](../mechanisms/field_emergence.md), and [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md).

## Operationalization

- Compute [beauty coefficient](beauty_coefficient.md) across a broad corpus.
- Select a high-B subset, such as the top 0.1% of papers.
- Map papers to journal or field categories.
- Compute each category's fraction of the high-B subset and compare against corpus composition if possible.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) uses Journal Citation Reports categories to profile papers in the top 0.1% of the WoS beauty-coefficient distribution.
- The paper reports that physics, chemistry, and mathematics subfields are prominent producers of sleeping beauties.
- Ke et al. also identify medicine, statistics, probability, and multidisciplinary sciences as notable categories, extending earlier claims about where sleeping beauties occur.
- The paper notes that multidisciplinary sciences rank third among top categories in their analysis.

## Caveats

- Journal categories can be broad, overlapping, and inconsistent over time.
- Field-origin profiles should be separated from cross-field citation destinations.
- Top-percentile selection is useful for profiling but should not imply a natural boundary in the continuous delayed-recognition distribution.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [beauty coefficient](beauty_coefficient.md)
- [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)
- [field normalized citation impact](field_normalized_citation_impact.md)
- [field classifications](field_classifications.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_field_origin_profile`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: SB field profile; delayed-recognition field profile; top-B subject categories; sleeping-beauty discipline profile
