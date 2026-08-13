# Ranked sleeping-beauty case inventory

## Summary

A ranked high-B table is a reusable representation of delayed-recognition cases, combining trajectory scores with bibliographic and timing metadata for follow-up coding.

## Canonical Form

- Unit of analysis: candidate sleeping-beauty paper.
- Typical representation: ranked table with B, publication year, awakening year, authors, title, journal, and field.
- Representation target: case inventory for mechanism analysis and historical inspection.
- Empirical signature: top-ranked rows become focal examples for qualitative and citation-context follow-up.

## Uses in Science of Science

- Turns [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) output into a navigable case list.
- Supports mechanism coding such as method canonization, cross-disciplinary awakening, or benchmark rediscovery.
- Helps preserve bibliographic provenance when delayed-recognition scores are recomputed.

## Operationalization

- Export high-B candidates with stable identifiers, bibliographic fields, timing fields, B scores, and field labels.
- Include enough metadata for manual verification and later linking to citation contexts or co-citation neighborhoods.
- Avoid hiding the continuous distribution behind only a top-N label.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) presents ranked sleeping-beauty tables in science, including titles, authors, years, journals, fields, and beauty coefficients.
- Those tables serve as a bridge from continuous scoring to historical case interpretation.

## Caveats

- Top lists can overstate discreteness in a continuous delayed-recognition spectrum.
- Ranked inventories inherit database coverage and field-classification limits.

## Links

- [Beauty-coefficient tail scaling](../measures/beauty_coefficient_tail_scaling.md)
- [Awakening time](../measures/awakening_time.md)
- [Sleeping-beauty field-origin profile](../measures/sleeping_beauty_field_origin_profile.md)
- [Sleeping-beauty detection](../methods/sleeping_beauty_detection.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `ranked_sleeping_beauty_case_inventory`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: sleeping beauty ranked table; delayed-recognition case inventory; high-B case list
