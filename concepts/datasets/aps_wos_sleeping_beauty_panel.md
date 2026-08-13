# APS-WoS sleeping-beauty panel

## Summary

The APS-WoS sleeping-beauty panel is a long-window citation-history corpus combining American Physical Society papers with a multidisciplinary Web of Science sample to study delayed recognition across fields.

## Canonical Form

- Unit of analysis: cited paper, annual citation count, publication year, citation peak year, field, journal, or awakening event.
- Typical representation: annual citation time series with APS or WoS source labels and derived sleeping-beauty measures.
- Data target: long observation windows that can reveal delayed recognition rather than only early citation performance.
- Empirical signature: papers can remain low-cited for decades before a late citation burst becomes visible.

## Uses in Science of Science

- Supplies the empirical base for [beauty coefficient](../measures/beauty_coefficient.md), [awakening time](../measures/awakening_time.md), and [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md).
- Supports comparisons between monodisciplinary and multidisciplinary delayed-recognition patterns.
- Links [Web of Science](web_of_science.md), [physical review citation network](physical_review_citation_network.md), and [citation trajectory models](../methods/citation_trajectory_models.md).
- Extends the earlier [CWTS-ISI sleeping-beauty corpus](cwts_isi_sleeping_beauty_corpus.md) from threshold-grid counts to continuous delayed-recognition scoring.

## Operationalization

- Build annual citation histories for papers with at least one citation.
- Preserve source scope: APS as a physics-focused corpus and WoS as a multidisciplinary corpus.
- Track each paper's publication year, yearly citation maximum, awakening time, field or journal category, and cross-disciplinary citing share.
- Use long observation windows before interpreting low early citation counts as lack of value.

## Evidence and Validations

- Verified full-text evidence from Ke, Ferrara, Radicchi, and Flammini (2015) uses 384,649 cited APS papers and 22,379,244 cited Web of Science papers.
- The paper states that the two datasets span more than a century, allowing sleeping-beauty behavior to be examined over long observation windows.
- Ke et al. use APS as a monodisciplinary physics proxy and WoS to expose multidisciplinary features of sleeping beauties.
- The same full text supports [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md): several top Web of Science sleeping beauties published in Physical Review are not top APS sleeping beauties because much of their attention comes from outside APS journals.
- The verified PDF is locally available at `papers/pdfs/verified/ke_2015.pdf`, with title similarity 1.000 and DOI match true in `papers/metadata/verification_report.csv`.

## Caveats

- APS and WoS have different coverage, field composition, and citation-indexing histories.
- The long-window design favors older papers because recent papers have not had time to sleep and awaken.
- Field comparisons require normalization because baseline citation density differs across disciplines and eras.

## Links

- [Web of Science](web_of_science.md)
- [CWTS-ISI sleeping-beauty corpus](cwts_isi_sleeping_beauty_corpus.md)
- [physical review citation network](physical_review_citation_network.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `aps_wos_sleeping_beauty_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: APS WoS delayed-recognition panel; sleeping-beauty citation panel; long-window citation-history panel; APS Web of Science SB corpus
