# Sleeping-beauty count matrix

## Summary

Sleeping-beauty count matrix represents candidate counts across sleep-depth and awakening-intensity classes for a fixed publication cohort and sleep period.

## Canonical Form

- Unit of analysis: threshold cell, sleep-depth class, awakening-intensity class, publication cohort, or candidate count.
- Typical representation: table of counts by sleep class and post-sleep citation class.
- Representation target: make delayed-recognition rarity visible across threshold choices.
- Empirical signature: counts fall sharply as awakening intensity rises and sleep becomes deeper or longer.

## Uses in Science of Science

- Converts the [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md) into a tabular output.
- Helps interpret [sleep depth and length](../measures/sleep_depth_length.md) jointly with [awakening intensity](../measures/awakening_intensity.md).
- Provides a source representation for [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md).

## Operationalization

- Choose one publication cohort and sleep period.
- Define deep and less-deep sleep classes.
- Define awakening-intensity classes for the post-sleep period.
- Count papers in each sleep-depth by awakening-intensity cell.
- Report the underlying corpus denominator.

## Evidence and Validations

- Verified full-text evidence from van Raan (2004) presents a table of sleeping beauties for the 1988-1997 sleep period.
- The table separates deep and less-deep sleep and lists counts across five awakening-intensity classes.
- The representation makes clear how quickly candidate counts shrink under stricter awakening thresholds.

## Caveats

- A count matrix is threshold-dependent and does not capture continuous trajectory variation.
- Sparse extreme cells can be sensitive to database errors or self-citation handling.
- Counts should be compared with cohort size and publication-volume growth.

## Links

- [sleeping-beauty threshold grid](../methods/sleeping_beauty_threshold_grid.md)
- [sleep depth and length](../measures/sleep_depth_length.md)
- [awakening intensity](../measures/awakening_intensity.md)
- [sleeping-beauty population rarity](../measures/sleeping_beauty_population_rarity.md)
- [awakening-intensity panel plot](awakening_intensity_panel_plot.md)

## References

- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; SciSciNet: W2159299749; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_count_matrix`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: van Raan (2004) (2004)
- Latest seen paper: van Raan (2004) (2004)
- Primary reference DOI: `10.1023/B:SCIE.0000018543.82441.F1`
- OpenAlex ID: `W2159299749`
- Dimensions ID: `pub.1032191939`
- SciSciNet ID: `W2159299749`
- Aliases: sleeping-beauty threshold count table; delayed-recognition count matrix; awakening class table; sleep-depth awakening table
