# Sleeping-beauty cross-dataset visibility

## Summary

Sleeping-beauty cross-dataset visibility is the validation check that delayed-recognition rankings can change when a field-specific citation corpus is replaced by a multidisciplinary corpus.

## Canonical Form

- Unit of analysis: candidate sleeping-beauty paper, citation dataset, source journal set, citing-field coverage, or ranking position.
- Typical representation: APS-only rank versus Web of Science rank, within-field citation share, external-corpus citation share, or cross-dataset top-list overlap.
- Validation target: detect whether a monodisciplinary corpus hides late recognition that arrives through other fields.
- Empirical signature: a paper published in a field-specific venue is not a top sleeping beauty inside that field's corpus but becomes highly ranked once citations from outside the corpus are counted.

## Uses in Science of Science

- Adds a coverage validation layer to the [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md).
- Supports [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md) by showing that external-field citations are not just mechanism evidence but also measurement coverage.
- Warns that [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) should record citation-source scope before comparing rankings.
- Generalizes to field-specific databases, national databases, patent corpora, or specialty repositories used for delayed-recognition analysis.

## Operationalization

- Compute delayed-recognition scores in a field-specific corpus and a broader multidisciplinary corpus.
- Compare top-list overlap and rank shifts for papers published inside the field-specific source set.
- For large rank shifts, calculate the share of post-awakening citations from journals, fields, or sources outside the narrower corpus.
- Treat discrepancies as coverage evidence before making claims about absence, rarity, or field origin of sleeping beauties.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) compares APS and Web of Science sleeping-beauty results.
- The paper reports that several top Web of Science sleeping beauties published in Physical Review were not top papers in the APS dataset.
- Ke et al. interpret this as evidence that the bulk of those papers' citations came from journals outside the APS corpus.
- This validation supports the paper's broader claim that multidisciplinary datasets make the sleeping-beauty phenomenon more apparent.

## Caveats

- Broader datasets can add coverage but also add field-normalization problems and historical indexing heterogeneity.
- Rank shifts can reflect citation-source scope, field assignment, database errors, or changes in reference indexing.
- A narrow corpus can still be appropriate for within-field questions if its coverage limits are stated.
- Cross-dataset visibility does not by itself explain the social mechanism of awakening.

## Links

- [APS-WoS sleeping-beauty panel](../datasets/aps_wos_sleeping_beauty_panel.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md)
- [Web of Science](../datasets/web_of_science.md)
- [physical review citation network](../datasets/physical_review_citation_network.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_cross_dataset_visibility`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: cross-dataset SB visibility; monodisciplinary sleeping-beauty undercount; external-corpus delayed-recognition visibility; APS-WoS sleeping-beauty discrepancy
